import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sunny"
          image={faker.image.avatar()}
          timeAgo="Today at 4:55"
          comment="nice post"
        />      
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jason" 
          image={faker.image.avatar()} 
          timeAgo="Today at 4:11" 
          comment="very nice"
        />      
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Penny"
          image={faker.image.avatar()}
          timeAgo="Today at 4:20"
          comment="sick moves bro"
        />  
      </ApprovalCard>    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))