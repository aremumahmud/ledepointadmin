
import '../css/questions.css'
import qa_data from '../data/qa'
import Question from './question'

function Questions(){
    return (
        <div className="questions">
            <p className="q_title">
                Questions? We&apos;ve Got You Covered
            </p> 
            {
                qa_data.map((data)=>{
                    return <Question key={1} q={data.q} a={data.a}/>
                })
            }
          
        </div>
       
    )
}

export default Questions