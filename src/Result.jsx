import { calculateInvestmentResults, formatter } from "./util/investment";


const Result = ({ userInput }) => {

    if (userInput.duration > 0) {

        const data = calculateInvestmentResults(userInput)
        const initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment

        console.log(data);

        return (<table id="result">

            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>

            <tbody>
                {data.map((yearData) => {

                    let totalIntrest =
                        yearData.valueEndOfYear
                        - yearData.annualInvestment
                        * yearData.year
                        - initialInvestment

                    let totalAmountInvested = yearData.valueEndOfYear - totalIntrest


                    return <tr key={yearData.year}>

                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>

                    </tr>
                })}
            </tbody>


        </table>

        )

    }


    return <p className="center">Please Enter a valid duration</p>




}

export default Result
