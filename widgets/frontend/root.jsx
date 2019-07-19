import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = () => {
  const tabs =[{title: 'Fav Partner', content: 'Henry Tan'},{title: 'Fav Instructor', content: 'Simcha'},{title: 'Fav Movie (right now)', content: 'Network'}];
  return (
    <>
      <div><Clock /></div>
      <div className="tabs"><Tabs tabs={tabs}/></div>
    </>
  )
}

export default Root;