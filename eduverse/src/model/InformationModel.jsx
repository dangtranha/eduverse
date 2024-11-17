const UserInfor = {
    data: {
        firstName: "John",
        lastName: "Doe",
        birthday: "2024/12/31",
        phone: "123-45-678",
        country: "Vietnam",
        email: "john.doe@company.com",
    },
    update(newData) {
        this.data = { ...this.data, ...newData };
    },
};

export default UserInfor;



