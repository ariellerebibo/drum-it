//The actions creator file for react redux

export  const clickEnable= (inst_id)=>
{

return{
        type : 'ENABLE_DISABLE_INSTRUMENT',
        payload : inst_id
    }

};

export const monitorClick=(inst_id,timeStamp)=>
{
    return{
        type : 'MONITOR_CLICK',
        payload : {inst_id,timeStamp}
    }
}

export const EndSession=()=>
{
    console.log('go there');
    return{
        type : 'END_SESSION',
    }
}

