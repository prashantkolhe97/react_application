import styles from './Card.module.css'

function Card() {
    const CardArray = [{
        image: "https://www.mumbaiindians.com/static-assets/images/players/small/3852.png",
        Name: "ROHIT SHARMA",
        Role: "CAPTAIN",
        Nickname: "HITMAN"
    },
    {
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png",
        Name: "ISHAN kISHAN",
        Role: "WICKET KEEPPER",
        Nickname: "POCKET DYNAMO"
    },
    {
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/550.png",
        Name: "CAMERON GREEN",
        Role: "ALL ROUNDAR",
        Nickname: "GUN PLAYER"
    }, 
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhu5H1xo43iTX4OFWSSDbG9AveeEYMHEYlg&usqp=CAU",
        Name: "SURYA",
        Role: "BATSMAN",
        Nickname: "SKY"
    },
    {
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/993.png",
        Name: "TILAK VARMA",
        Role: "BATSMAN",
        Nickname: "FUTURE STAR"
    },
    {
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/636.png",
        Name: "TIM DAVID",
        Role: "BATSMAN",
        Nickname: "HARD HITTER"
    },
    {
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1541.png",
        Name: "NIHAL WADHERA",
        Role: "BATSMAN",
        Nickname: "TALENTED"
    },
    {
        image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png",
        Name: "PIYUSH CHAWALA",
        Role: "LEG SPINNER",
        Nickname: "MAGICIAN"
    },
    {
        image: "https://images1.livehindustan.com/uploadimage/library/2022/04/28/16_9/16_9_1/kumar_kartikeya_singh_1651132622.jpg",
        Name: "KUMAR KARTIK",
        Role: "LEG SPINNER",
        Nickname: "FIRKI KING"
    },
    {
        image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/05/fadbdc5d-josh-inglis-46-1-1652711604.jpg",
        Name: "AKASH MADHWAL",
        Role: "FASTER",
        Nickname: "YORKER KING"
    },
    {
        image: "https://www.mykhel.com/thumb/220x100x220/cricket/players/9/5959.1680523535.jpg",
        Name: "JASON BEHRENDORFF",
        Role: "MEDIUM FASTER",
        Nickname: "WICKET TAKER"
    }
    ]
    return (
         <div >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjimob8avrK9jWnATpYz6Q_c7X1uavv8iMA&usqp=CAU'/>
         <h1 className={styles.Div1}>MUMBAI INDIANS</h1>
         <h3>PLAYER AND THEIR NICKNAME</h3>
        <div className={styles.parent}>
            {CardArray.map((data) => (

                    <div className={styles.Card}>
                    <img className={styles.image} src={data.image} />
                    <p className={styles.Name}>{data.Name}</p>
                    <p className={styles.team}>{data.Role}</p>
                    <p className={styles.role}>{data. Nickname}</p>

                </div>
            ))}
        </div>
        </div>
    )
}

export default Card