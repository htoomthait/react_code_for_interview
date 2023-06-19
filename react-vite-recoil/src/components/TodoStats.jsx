import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../recoil_store/recoil_state";

const TodoStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUnCompleteNum,
        percentageCompleted,
        allText,
    } = useRecoilValue(todoListStatsState);

    const formatedPercentCompleted = Math.round(percentageCompleted);

    return (
        <ul>
            <li> Total items: {totalNum}</li>
            <li> Items completed: {totalCompletedNum}</li>
            <li> Items not completed: {totalUnCompleteNum}</li>
            <li> Percentage completed: {formatedPercentCompleted}</li>
            <li> Text not completed: {allText}</li>
        </ul>
    );
};

export default TodoStats;
