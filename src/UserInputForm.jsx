
const UserInputForm = ({stateFunction , userInput}) => {

    return (
        <section id='user-input'>

            <div id="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(e)=>{
                        stateFunction("initialInvestment", e.target.value)
                    }} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(e)=>{
                        stateFunction('annualInvestment',e.target.value)
                    }} />
                </p>

            </div>

            <div id="input-group">
                <p>
                    <label>Expected Return </label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(e)=>{
                        stateFunction('expectedReturn',e.target.value)
                    }} />
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(e)=>{
                        stateFunction('duration',e.target.value)
                    }} />
                </p>

            </div>

        </section>
    )
}

export default UserInputForm
