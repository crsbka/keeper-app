import React, {useState} from "react";

function CreateArea() {

    const [titleText, setTitleText] = useState("");
    const [contentText, setContentText] = useState("");


    function handleTitleChange(event) {
        const newTitleValue = event.target.value
        setTitleText(newTitleValue)
    }

    function handleContentChange(event) {
        const newContentValue = event.target.value
        setContentText(newContentValue)
    }


    function addNote() {
        alert(`You added ${titleText} and ${contentText}`)
    }

    return (
        <div>
            <form>
                <input name="title"
                       placeholder="Title"
                       onChange={handleTitleChange}
                       value={titleText}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    onChange={handleContentChange}
                    value={contentText}
                />
                <button
                    onClick={addNote}>
                    <span>+</span>
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
