// 1. Create personAccount object

const personAccount = {
  firstName: 'Jane',
  lastName: 'Doe',
  incomes: [],
  expenses: [],
  
  totalIncome() {
    return this.incomes.reduce((acc, cur) => acc + cur.amount, 0);
  },

  totalExpense() {
    return this.expenses.reduce((acc, cur) => acc + cur.amount, 0);
  },

  accountInfo() {
    return `${this.firstName} ${this.lastName} | Income: ${this.totalIncome()} | Expenses: ${this.totalExpense()}`;
  },

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};

// Example usage:
personAccount.addIncome('Job', 3000);
personAccount.addIncome('Freelancing', 1200);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Groceries', 300);
// console.log(personAccount.accountInfo());
// console.log('Balance:', personAccount.accountBalance());


// 2. Sign Up / Sign In Logic with users and products
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];

// a. signUp
function signUp(newUser) {
  const userExists = users.some(
    user => user.email === newUser.email || user.username === newUser.username
  );
  if (userExists) {
    return 'User already has an account.';
  }
  users.push({ ...newUser, _id: Date.now().toString(), createdAt: new Date().toLocaleString(), isLoggedIn: false });
  return 'User successfully registered!';
}

// b. signIn
function signIn(usernameOrEmail, password) {
  const user = users.find(
    user => (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
  );
  if (user) {
    user.isLoggedIn = true;
    return 'Successfully logged in!';
  }
  return 'Invalid credentials.';
}


// 3. Products array with rating & like functionality

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV: Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

// a. rateProduct
function rateProduct(productId, userId, rating) {
  const product = products.find(p => p._id === productId);
  if (!product) return 'Product not found';

  const existingRating = product.ratings.find(r => r.userId === userId);
  if (existingRating) {
    existingRating.rate = rating; // Update rating
  } else {
    product.ratings.push({ userId, rate: rating });
  }
  return 'Rating submitted.';
}

// b. averageRating
function averageRating(productId) {
  const product = products.find(p => p._id === productId);
  if (!product || product.ratings.length === 0) return 0;

  const total = product.ratings.reduce((acc, r) => acc + r.rate, 0);
  return (total / product.ratings.length).toFixed(2);
}

// c. likeProduct
function likeProduct(productId, userId) {
  const product = products.find(p => p._id === productId);
  if (!product) return 'Product not found';

  if (product.likes.includes(userId)) {
    product.likes = product.likes.filter(id => id !== userId); // Remove like
    return 'Product unliked.';
  } else {
    product.likes.push(userId); // Add like
    return 'Product liked.';
  }
}

// Example usage:
// console.log(signUp({ username: 'JaneDoe', email: 'jane@doe.com', password: 'abc123' }));
// console.log(signIn('JaneDoe', 'abc123'));
// console.log(rateProduct('aegfal', 'zwf8md', 4));
// console.log('Average Rating:', averageRating('eedfcf'));
// console.log(likeProduct('aegfal', 'zwf8md'));
