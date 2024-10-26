import { useLocation } from "react-router-dom";
import { useAuth } from "../stores/AuthProvider";
import { useEffect } from "react";

interface UseSetPrivateURIType {
    (): void
}


const useSetPrivateURI: UseSetPrivateURIType = (): void => {

    const { isAuthenticated, memorizeCurrentPrivateURI } = useAuth();
    const location = useLocation();

    // Combine pathname and search params to get the full URI
    const fullURI = `${location.pathname}${location.search}`;

    useEffect(() => {
        if (isAuthenticated) {
            memorizeCurrentPrivateURI(fullURI);
        }

    }, [isAuthenticated])


}

export default useSetPrivateURI;