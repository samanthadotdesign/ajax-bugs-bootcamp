export default function initBugModel(sequelize, DataTypes) {
  return sequelize.define(
    'bug',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      problem: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      errorText: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      commit: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      featureId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'features',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
    },
  );
}
