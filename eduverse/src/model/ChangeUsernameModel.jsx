

const ChangeUsernameModel = {
    data: {
        currentUsername: "quochuy",
        newUsername: "",
        remainingAttempts: 3,
    },
    update(newData) {
        if (this.data.remainingAttempts > 0) {
            this.data = { ...this.data, ...newData };
        }
    },
};

export default ChangeUsernameModel;
