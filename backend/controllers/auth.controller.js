export const signup = async (req , res)=>{
    try {
        const {fullName , userName, password, confirmPassword, gender} = req.body;
    } catch (error) {

    }
};

export const login = (req , res)=>{
    res.send("Login User");
    // console.log("Login User");
}

export const logout = (req , res)=>{
    res.send("Logout User");
    // console.log("Logout User");
}