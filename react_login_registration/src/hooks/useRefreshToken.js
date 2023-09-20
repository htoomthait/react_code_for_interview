import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const accessToken = auth.accessToken;
        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };
        try {
            const response = await axios.post("/refresh", {
                headers: headers,
            });
            // console.log(response.data);
            setAuth((prev) => {
                console.log(JSON.stringify(prev));
                console.log(response.data.authorization.access_token);
                return {
                    ...prev,
                    accessToken: response.data.authorization.access_token,
                };
            });

            return response.data.authorization.access_token;
        } catch (err) {
            console.error(err);
        }
    };

    return refresh;
};

export default useRefreshToken;
