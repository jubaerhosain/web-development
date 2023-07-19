// I have table tab4(a, b, c). a, b, c comes from tab1, tab2, tab3. (a,b,c) is primary key of tab4. how to design in sequelize


const Tab1 = sequelize.define('tab1', {
  a: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  // Define other columns for tab1 here...
});

const Tab2 = sequelize.define('tab2', {
  b: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  // Define other columns for tab2 here...
});

const Tab3 = sequelize.define('tab3', {
  c: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  // Define other columns for tab3 here...
});

const Tab4 = sequelize.define('tab4', {
  a: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tab1,
      key: 'a',
    },
  },
  b: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tab2,
      key: 'b',
    },
  },
  c: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tab3,
      key: 'c',
    },
  },
  // Define other columns for tab4 here...
});



//============================================
const Tab4 = sequelize.define('tab4', {
  a: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tab1,
      key: 'a',
      onUpdate: 'CASCADE', // specify onUpdate option
    },
  },
  b: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tab2,
      key: 'b',
      onUpdate: 'CASCADE', // specify onUpdate option
    },
  },
  c: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tab3,
      key: 'c',
      onUpdate: 'CASCADE', // specify onUpdate option
    },
  },
  // Define other columns for tab4 here...
});


