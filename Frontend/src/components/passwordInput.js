import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const PasswordInput = ({ password, handlePassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`w-64 p-2 mb-2 border rounded-full outline-none border-fakatcolor bg-fakatcolor  ''}`}>

            <TextField
                size="small"
                type={showPassword ? "text" : "password"}
                label="Password"
                value={password}
                onChange={handlePassword}
                required={true}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
        </div>
    );
};

export default PasswordInput;