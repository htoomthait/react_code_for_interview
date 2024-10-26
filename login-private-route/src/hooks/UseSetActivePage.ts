import { useAuth } from "../stores/AuthProvider";


interface UseActivePage {
    (page: string): void;
}


const useSetActivePage: UseActivePage = (page: string): void => {
    const { memoActivePage } = useAuth();

    memoActivePage(page)
}

export default useSetActivePage;