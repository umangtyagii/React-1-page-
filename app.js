{/* <div id='parent'>
    <div Id='child1'>
<h1>hi my name is umang</h1>
<h2>i am learing react</h2>
    </div>
    <div Id='child2'>
<h1>hi my name is umang's friend </h1>
<h2>i am also learing the react</h2>
    </div>
</div> */}

// the task is you have create the this type nested element by using scripting 





const heading=React.createElement('div',
{id:'Parent'},
[React.createElement('div',{id:'child1'},
             [React.createElement('h1',{},'hi my name is umang'),
            React.createElement('h2',{},'i am learing reac')])
,React.createElement('div',{id:'child2'},[React.createElement('h1',{},`hi my name is umang's friend`),
React.createElement('h2',{},'i am also learing the react')])])

const Root=ReactDOM.createRoot(document.getElementById('Root'))


Root.render(heading)

