import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Online Food`;
    }, [title])
};
export default useTitle;