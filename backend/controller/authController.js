const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const user = await User.create({ 
      username, 
      email, 
      password,
      role: email.endsWith('@admin.com') ? 'admin' : 'user' 
    });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({ token, user: { id: user._id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      // Normalisez l'email pour éviter les problèmes de casse
      const normalizedEmail = email.toLowerCase().trim();
      
      const user = await User.findOne({ email: normalizedEmail }).select('+password');
      
      if (!user) {
        console.log(`Aucun utilisateur trouvé avec l'email: ${normalizedEmail}`);
        return res.status(401).json({ 
          error: 'Invalid credentials',
          message: 'Email ou mot de passe incorrect'
        });
      }
  
      console.log(`Comparaison du mot de passe pour l'utilisateur: ${user._id}`);
      const isMatch = await user.comparePassword(password);
      
      if (!isMatch) {
        console.log('Mot de passe incorrect pour l\'utilisateur:', user._id);
        return res.status(401).json({
          error: 'Invalid credentials', 
          message: 'Email ou mot de passe incorrect'
        });
      }
  
      // Créez le token JWT
      const token = jwt.sign(
        {
          userId: user._id,
          role: user.role,
          email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );
  
      // Ne renvoyez jamais le mot de passe dans la réponse
      const userResponse = {
        id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt
      };
  
      res.json({
        success: true,
        token,
        user: userResponse
      });
  
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      res.status(500).json({
        error: 'Server error',
        message: 'Une erreur est survenue lors de la connexion'
      });
    }
  };