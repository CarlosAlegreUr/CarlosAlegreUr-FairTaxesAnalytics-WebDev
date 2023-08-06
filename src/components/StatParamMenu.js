import { useEffect } from "react"
import { memo } from "react"

export default memo(function StatParamMenu(props) {

    useEffect(() => {
        console.log("StateParam component rendered")
    })

    return (
        <form id="stat-param">
            Budget{" "}
            <input
                onChange={(event) => props.setBudget(event.target.value)}
                type="number"
            ></input>{" "}
            €/year
            <p>
                {" "}
                If Real% in the income levels' table is green, it means the
                change in budget will affect as you expect to that income level
                without carrying more debt.
            </p>{" "}
            <br /> <br />
            <p> Budget analysis data: </p>
            Years{" "}
            <input
                onChange={(event) => props.setYearsToShow(event.target.value)}
                type="number"
                placeholder="recommended [0-15] years"
            ></input>{" "}
            <br /> <br />
            Interests <input type="checkbox"></input> <br />
            <p>
                {" "}
                If the interests of debt are included in the budget, mark the
                checkbox.
            </p>{" "}
            <br />
            <br />
        </form>
    )
})
