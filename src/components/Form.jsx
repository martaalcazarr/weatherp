
const Form = () => {
  return (
    <div className="container">
        <form>
            <div className="field">
                <label htmlFor="city">City</label>
                <input 
                    type="text" 
                    id="city"
                    name="city"
                />
            </div>

            <div className="field">
                <label htmlFor="country">Country</label>
               <select name="country" id="country">
                <option value="">--Select a country--</option>
                <option value="CL">Chile</option>
                <option value="ES">Spain</option>
                <option value="MX">Mexico</option>
                <option value="PE">Peru</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="US">United States</option>
                <option value="FR">France</option>
                <option value="IT">Italy</option>
               </select>
            </div>

            <input 
                type="submit" 
                value="Check weather"
            />
        </form>
    </div>
  )
}

export default Form