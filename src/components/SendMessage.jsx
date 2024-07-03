import "./SendMessage.css"

function SendMessage () {
    return <div className="send_message">
        <h1>Message</h1>
        <form>
            <textarea
                placeholder="Description"
                required
            />
            <button className="submitmessage" type="submit">Envoyer</button>
        </form>
    </div>
    
}

export default SendMessage;
