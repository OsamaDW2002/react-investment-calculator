import {Inputs} from "./Inputs.jsx";
export default function UserInput({handelChange, investment}) {
    return (
        <div id={'user-input'} >
            <div className="input-group">
                <Inputs
                    label={'Initial Investment'}
                    onChange={(event) => handelChange('initialInvestment', event.target.value)}
                    value = {investment.initialInvestment}
                />
                <Inputs
                    label={'Annual Investment'}
                    onChange={(event) => handelChange('annualInvestment', event.target.value)}
                    value = {investment.annualInvestment}
                />
            </div>
            <div className="input-group">
                <Inputs
                    label={'Expected Return'}
                    onChange={(event) => handelChange('expectedReturn', event.target.value)}
                    value = {investment.expectedReturn}
                />
                <Inputs
                    label={'Duration'}
                    onChange={(event) => handelChange('duration', event.target.value)}
                    value={investment.duration}
                />
            </div>
        </div>
    )
}