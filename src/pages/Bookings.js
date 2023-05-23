import React from 'react'

export default function Bookings() {
  return (
    <>
      <div className='h-[100px] m-[100px]'>
        {/* <div style={{"Width:100%;display: flex;justify-content: space-around;align-items: center;height:100%;"> */}
        <div className=' w-[100%] flex  justify-around items-center h-[100%]'>
            {/* <div style={{"height:100%;background-color:beige;Width:30%;color:black;border-radius: 10px;"> */}
            <div className='h-[100%] bg-yellow-200 w-[30%] text-black rounded-lg'>
                <div className='p-[10px] flex justify-start items-center'>
                    {/* <img src="festival.png" alt="coming"/>&nbsp;<span>Venue</span> */}
                    {/* <img src="" alt="yo"><span></span></img> */}
                </div>
                {/* <div style={{"position:relative;top:30%;left:10%;color:#A1A1A1"> */}
                <div className='relative top-[30%] left-[10%] text-[#A1A1A1]'>
                    <p>Where is the match?</p>
                </div>
            </div>
            {/* <div style={{"height:100%;background-color:beige;Width:30%;color:black;border-radius: 10px;"> */}
            <div className='h-[100%] bg-yellow-200 w-[30%] text-black rounded-lg'>
             {/* <div style={{"padding:10pt; display: flex;justify-content: flex-start;align-items: center;"> */}
                <div className='p-[10px] flex justify-start items-center'>
                    {/* <img src="calendar_month.png" alt="coming"/>&nbsp;<span>Dates</span> */}
                    {/* <img src="" alt="" /> */}
                </div>
             {/* <div style={{"position:relative;top:30%;left:10%;color:#A1A1A1;display: flex;"> */}
                <div className='relative top-[30%] left-[10%] text-[#A1A1A1]'>
                    <p style={{Width:"80%"}}>dd-mm-yy</p>
                    {/* <img src="calendar_today.png"/> */}
                </div>
            </div>
            <div style={{height:"100%",backgroundColor:"beige",Width:"30%",color:"black",borderRadius: "10px"}}>
                {/* <div style={{"padding:10pt; display: "flex",justifyContent: "flex-start", alignItems: "center"}}> */}
                <div className="p-[10px] flex justify-start items-center">
                    {/* // <img src="diversity_3.png" alt="coming"/><span>People</span> */}
                </div>
                <div style={{position: "relative",top:"30%",left:"10%",color:"#A1A1A1"}}>
                    <p>No. of people coming</p>
                </div>
            </div>

        </div>
    </div>
    <div style={{Width:"100%",height:"50px"}}></div>
    <div style={{Position:"relative",left:"8%"}}>
        <p style={{fontWeight: "400",fontSize: "10vh"}}>SEATS</p>
    </div>
    
    <div style={{height:"300px", margin:"90px"}}>
        <div style={{Width:"100%",display: "flex","justifyContent": "space-around",alignItems: "center",height: "100%"}}>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
            <p style={{FontSize: "25px","marginTop":"10px"}}>A UPPER</p>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A1</button>
                <button style={{Width:"36px",height:"36px"}}>A2</button>
                <button style={{Width:"36px",height:"36px"}}>A3</button>
                <button style={{Width:"36px",height:"36px"}}>A4</button>
                <button style={{Width:"36px",height:"36px"}}>A5</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A6</button>
                <button style={{Width:"36px",height:"36px"}}>A7</button>
                <button style={{Width:"36px",height:"36px"}}>A8</button>
                <button style={{Width:"36px",height:"36px"}}>A9</button>
                <button style={{Width:"36px",height:"36px"}}>A10</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A11</button>
                <button style={{Width:"36px",height:"36px"}}>A12</button>
                <button style={{Width:"36px",height:"36px"}}>A13</button>
                <button style={{Width:"36px",height:"36px"}}>A14</button>
                <button style={{Width:"36px",height:"36px"}}>A15</button>
            </div>
            </div>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                <p style={{Fontsize: "25px", marginTop:"10px"}} > A LOWER</p>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A1</button>
                    <button style={{Width:"36px",height:"36px"}}>A2</button>
                    <button style={{Width:"36px",height:"36px"}}>A3</button>
                    <button style={{Width:"36px",height:"36px"}}>A4</button>
                    <button style={{Width:"36px",height:"36px"}}>A5</button>
                </div>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A6</button>
                    <button style={{Width:"36px",height:"36px"}}>A7</button>
                    <button style={{Width:"36px",height:"36px"}}>A8</button>
                    <button style={{Width:"36px",height:"36px"}}>A9</button>
                    <button style={{Width:"36px",height:"36px"}}>A10</button>
                </div>
                <div >
                    <button style={{Width:"36px",height:"36px"}}>A11</button>
                    <button style={{Width:"36px",height:"36px"}}>A12</button>
                    <button style={{Width:"36px",height:"36px"}}>A13</button>
                    <button style={{Width:"36px",height:"36px"}}>A14</button>
                    <button style={{Width:"36px",height:"36px"}}>A15</button>
                </div>
                </div>
                //<div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>   
                <p style={{Fontsize: "25px",marginTop:"10px"}}>B UPPER</p>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A1</button>
                        <button style={{Width:"36px",height:"36px"}}>A2</button>
                        <button style={{Width:"36px",height:"36px"}}>A3</button>
                        <button style={{Width:"36px",height:"36px"}}>A4</button>
                        <button style={{Width:"36px",height:"36px"}}>A5</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A6</button>
                        <button style={{Width:"36px",height:"36px"}}>A7</button>
                        <button style={{Width:"36px",height:"36px"}}>A8</button>
                        <button style={{Width:"36px",height:"36px"}}>A9</button>
                        <button style={{Width:"36px",height:"36px"}}>A10</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A11</button>
                        <button style={{Width:"36px",height:"36px"}}>A12</button>
                        <button style={{Width:"36px",height:"36px"}}>A13</button>
                        <button style={{Width:"36px",height:"36px"}}>A14</button>
                        <button style={{Width:"36px",height:"36px"}}>A15</button>
                    </div>
                    </div>
                </div>
    </div>

    <div style={{height: "300px",marginTop:"90px"}}>
        <div className=' w-[100%] flex  justify-around items-center h-[100%]'>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
            <p style={{Fontsize: "25px", marginTop:"10px"}}>B LOWER</p>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A1</button>
                <button style={{Width:"36px",height:"36px"}}>A2</button>
                <button style={{Width:"36px",height:"36px"}}>A3</button>
                <button style={{Width:"36px",height:"36px"}}>A4</button>
                <button style={{Width:"36px",height:"36px"}}>A5</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A6</button>
                <button style={{Width:"36px",height:"36px"}}>A7</button>
                <button style={{Width:"36px",height:"36px"}}>A8</button>
                <button style={{Width:"36px",height:"36px"}}>A9</button>
                <button style={{Width:"36px",height:"36px"}}>A10</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A11</button>
                <button style={{Width:"36px",height:"36px"}}>A12</button>
                <button style={{Width:"36px",height:"36px"}}>A13</button>
                <button style={{Width:"36px",height:"36px"}}>A14</button>
                <button style={{Width:"36px",height:"36px"}}>A15</button>
            </div>
            </div>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                <p style={{Fontsize: "25px", marginTop:"10px"}}>C UPPER</p>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A1</button>
                    <button style={{Width:"36px",height:"36px"}}>A2</button>
                    <button style={{Width:"36px",height:"36px"}}>A3</button>
                    <button style={{Width:"36px",height:"36px"}}>A4</button>
                    <button style={{Width:"36px",height:"36px"}}>A5</button>
                </div>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A6</button>
                    <button style={{Width:"36px",height:"36px"}}>A7</button>
                    <button style={{Width:"36px",height:"36px"}}>A8</button>
                    <button style={{Width:"36px",height:"36px"}}>A9</button>
                    <button style={{Width:"36px",height:"36px"}}>A10</button>
                </div>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A11</button>
                    <button style={{Width:"36px",height:"36px"}}>A12</button>
                    <button style={{Width:"36px",height:"36px"}}>A13</button>
                    <button style={{Width:"36px",height:"36px"}}>A14</button>
                    <button style={{Width:"36px",height:"36px"}}>A15</button>
                </div>
                </div>
               <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                    <p style={{Fontsize: "25px", marginTop:"10px"}}>C LOWER</p>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A1</button>
                        <button style={{Width:"36px",height:"36px"}}>A2</button>
                        <button style={{Width:"36px",height:"36px"}}>A3</button>
                        <button style={{Width:"36px",height:"36px"}}>A4</button>
                        <button style={{Width:"36px",height:"36px"}}>A5</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A6</button>
                        <button style={{Width:"36px",height:"36px"}}>A7</button>
                        <button style={{Width:"36px",height:"36px"}}>A8</button>
                        <button style={{Width:"36px",height:"36px"}}>A9</button>
                        <button style={{Width:"36px",height:"36px"}}>A10</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A11</button>
                        <button style={{Width:"36px",height:"36px"}}>A12</button>
                        <button style={{Width:"36px",height:"36px"}}>A13</button>
                        <button style={{Width:"36px",height:"36px"}}>A14</button>
                        <button style={{Width:"36px",height:"36px"}}>A15</button>
                    </div>
                    </div>
                </div>
    </div>
    <div style={{height: "300px",marginTop:"90px"}}>
        <div className=' w-[100%] flex  justify-around items-center h-[100%]'>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
            <p style={{Fontsize: "25px", marginTop:"10px"}}>D UPPER</p>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A1</button>
                <button style={{Width:"36px",height:"36px"}}>A2</button>
                <button style={{Width:"36px",height:"36px"}}>A3</button>
                <button style={{Width:"36px",height:"36px"}}>A4</button>
                <button style={{Width:"36px",height:"36px"}}>A5</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A6</button>
                <button style={{Width:"36px",height:"36px"}}>A7</button>
                <button style={{Width:"36px",height:"36px"}}>A8</button>
                <button style={{Width:"36px",height:"36px"}}>A9</button>
                <button style={{Width:"36px",height:"36px"}}>A10</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A11</button>
                <button style={{Width:"36px",height:"36px"}}>A12</button>
                <button style={{Width:"36px",height:"36px"}}>A13</button>
                <button style={{Width:"36px",height:"36px"}}>A14</button>
                <button style={{Width:"36px",height:"36px"}}>A15</button>
            </div>
            </div>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                <p style={{Fontsize: "25px", marginTop:"10px"}}>D LOWER</p>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A1</button>
                    <button style={{Width:"36px",height:"36px"}}>A2</button>
                    <button style={{Width:"36px",height:"36px"}}>A3</button>
                    <button style={{Width:"36px",height:"36px"}}>A4</button>
                    <button style={{Width:"36px",height:"36px"}}>A5</button>
                </div>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A6</button>
                    <button style={{Width:"36px",height:"36px"}}>A7</button>
                    <button style={{Width:"36px",height:"36px"}}>A8</button>
                    <button style={{Width:"36px",height:"36px"}}>A9</button>
                    <button style={{Width:"36px",height:"36px"}}>A10</button>
                </div>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A11</button>
                    <button style={{Width:"36px",height:"36px"}}>A12</button>
                    <button style={{Width:"36px",height:"36px"}}>A13</button>
                    <button style={{Width:"36px",height:"36px"}}>A14</button>
                    <button style={{Width:"36px",height:"36px"}}>A15</button>
                </div>
                </div>
               <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                    <p style={{Fontsize: "25px", marginTop:"10px"}}>E UPPER</p>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A1</button>
                        <button style={{Width:"36px",height:"36px"}}>A2</button>
                        <button style={{Width:"36px",height:"36px"}}>A3</button>
                        <button style={{Width:"36px",height:"36px"}}>A4</button>
                        <button style={{Width:"36px",height:"36px"}}>A5</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A6</button>
                        <button style={{Width:"36px",height:"36px"}}>A7</button>
                        <button style={{Width:"36px",height:"36px"}}>A8</button>
                        <button style={{Width:"36px",height:"36px"}}>A9</button>
                        <button style={{Width:"36px",height:"36px"}}>A10</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A11</button>
                        <button style={{Width:"36px",height:"36px"}}>A12</button>
                        <button style={{Width:"36px",height:"36px"}}>A13</button>
                        <button style={{Width:"36px",height:"36px"}}>A14</button>
                        <button style={{Width:"36px",height:"36px"}}>A15</button>
                    </div>
                    </div>
                </div>
    </div>
    <div style={{height: "300px",marginTop:"90px"}}>
        <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
            <p style={{Fontsize: "25px", marginTop:"10px"}}>E LOWER</p>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A1</button>
                <button style={{Width:"36px",height:"36px"}}>A2</button>
                <button style={{Width:"36px",height:"36px"}}>A3</button>
                <button style={{Width:"36px",height:"36px"}}>A4</button>
                <button style={{Width:"36px",height:"36px"}}>A5</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A6</button>
                <button style={{Width:"36px",height:"36px"}}>A7</button>
                <button style={{Width:"36px",height:"36px"}}>A8</button>
                <button style={{Width:"36px",height:"36px"}}>A9</button>
                <button style={{Width:"36px",height:"36px"}}>A10</button>
            </div>
            <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                <button style={{Width:"36px",height:"36px"}}>A11</button>
                <button style={{Width:"36px",height:"36px"}}>A12</button>
                <button style={{Width:"36px",height:"36px"}}>A13</button>
                <button style={{Width:"36px",height:"36px"}}>A14</button>
                <button style={{Width:"36px",height:"36px"}}>A15</button>
            </div>
            </div>
           <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                <p style={{Fontsize: "25px", marginTop:"10px"}}>VIP BOX</p>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A1</button>
                    <button style={{Width:"36px",height:"36px"}}>A2</button>
                    <button style={{Width:"36px",height:"36px"}}>A3</button>
                    <button style={{Width:"36px",height:"36px"}}>A4</button>
                    <button style={{Width:"36px",height:"36px"}}>A5</button>
                </div>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A6</button>
                    <button style={{Width:"36px",height:"36px"}}>A7</button>
                    <button style={{Width:"36px",height:"36px"}}>A8</button>
                    <button style={{Width:"36px",height:"36px"}}>A9</button>
                    <button style={{Width:"36px",height:"36px"}}>A10</button>
                </div>
                <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                    <button style={{Width:"36px",height:"36px"}}>A11</button>
                    <button style={{Width:"36px",height:"36px"}}>A12</button>
                    <button style={{Width:"36px",height:"36px"}}>A13</button>
                    <button style={{Width:"36px",height:"36px"}}>A14</button>
                    <button style={{Width:"36px",height:"36px"}}>A15</button>
                </div>
                </div>
               <div className='h-[100%] bg-[#D1BEFF] w-[30%] text-black rounded-lg block justify-around items-center text-center'>
                    <p style={{Fontsize: "25px", marginTop:"10px"}}>TERRACE</p>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A1</button>
                        <button style={{Width:"36px",height:"36px"}}>A2</button>
                        <button style={{Width:"36px",height:"36px"}}>A3</button>
                        <button style={{Width:"36px",height:"36px"}}>A4</button>
                        <button style={{Width:"36px",height:"36px"}}>A5</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A6</button>
                        <button style={{Width:"36px",height:"36px"}}>A7</button>
                        <button style={{Width:"36px",height:"36px"}}>A8</button>
                        <button style={{Width:"36px",height:"36px"}}>A9</button>
                        <button style={{Width:"36px",height:"36px"}}>A10</button>
                    </div>
                    <div className='p-[5px] h-[20%] m-auto w-[80%] flex justify-evenly items-center'>
                        <button style={{Width:"36px",height:"36px"}}>A11</button>
                        <button style={{Width:"36px",height:"36px"}}>A12</button>
                        <button style={{Width:"36px",height:"36px"}}>A13</button>
                        <button style={{Width:"36px",height:"36px"}}>A14</button>
                        <button style={{Width:"36px",height:"36px"}}>A15</button>
                    </div>
                    </div>
                </div>
    </div>
    </div>

    {/* <center><button style={{"Width:280px;height:50px;font-size: 24px;border-radius: 5px;">BOOK Titems-centerKETS</button></center> */}
    </>
  )
}
