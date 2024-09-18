import {calculateInvestmentResults, formatter} from "../src/util/investment.js";
export default function Results({ input }) {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(resultData);
    return (
        <table id={'result'}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(data => {
                    let totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    let totalAmountInvestment = data.valueEndOfYear - totalInterest;
                    return (
                            <tr key={data.year}>
                                <td>{data.year}</td>
                                <td>{formatter.format(data.valueEndOfYear)}</td>
                                <td>{formatter.format(data.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvestment)}</td>
                            </tr>
                        );
                    }
                )}
            </tbody>
        </table>
    )
}