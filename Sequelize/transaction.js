sequelize.transaction(async (t) => {
    // Create a new user and save it to the database within the transaction
    const user = await User.create(
        {
            name: "John Doe",
            email: "john@example.com",
            age: 30,
        },
        { transaction: t }
    );

    // Update another table within the same transaction
    await SomeOtherModel.update({ someField: "someValue" }, { where: { someId: 123 } }, { transaction: t });
});
