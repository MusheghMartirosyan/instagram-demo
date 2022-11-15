import { memo } from "react"

const Comments = ({comments}) => {

    return (
        <div>
            {comments?.map(comment =>
                <div key={comment.id}>
                    <span>
                        {comment.username}
                    </span><span>     </span>
                    <p>
                        {comment.body}
                    </p> <br/>
                </div>
                )}
                
        </div>
    )
}

export default Comments