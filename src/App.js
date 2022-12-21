import logo from './logo.svg';
import './App.css';
import  { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Image } from './Image';
import { Counter } from './Counter';
import {Switch,Route,Link,Redirect} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import MenuIcon from '@mui/icons-material/Menu';
import { padding, textAlign } from '@mui/system';


function App() {

  const INITIAL_ANIMAL_LIST=[
    {
      name: "Shih Tzu",
      poster:
        "https://easyscienceforkids.com/wp-content/uploads/2019/07/Shih-Tzu-17-4-1-758x635.jpg",
      rating: 20,
      summary:
        "It got originated in china. Other names are Chinese Lion Dog and Chrysanthemum Dog. They are litter in size up to 1-8. Weight for both females and males varies from 8.8-16 lbs. Height is also the same for both ranges from 7.9-11 inches. It is available in some colors like brindle red, gold, etc. These are playful, outgoing, loyal, and gentle. The life span of Shi is 10-16 years."
    },
    {
      name: "Pug Dog",
      poster:
        "https://media-be.chewy.com/wp-content/uploads/2021/05/12102751/pug-1302166909-922x615.jpg",
      rating: 19,
      summary:
        "These are originated in China, and when migrated to Europe in the sixteenth century, it was well popularized. It was developed as a passion by Queen Victoria in the 19th century. Likewise, it was passed to the royal family. These types of dogs are strong and aggressive and suitable to grow at houses. These have a lazy nature. Its height is 30cm. The life span is of 12-15 years."
    },
    {
      name: " Pomeranian",
      poster:
        "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-09/Pomeranian.jpg?h=43a79dfa&itok=_PhGIre4",
      rating: 18.5,
      summary:
        "Pomeranian is named after region Pomeranian in central Europe. It is also called as Deutscher Spitz. Pet names are pompom, pom, and tumbleweed. These became popular by royal owners since the 18th century. It is a breed dog of spitz type. It is in a petite size. Its height of about 20cm and mass of body ranges between 1.9-3.5 kg. This type of dog breed is very playful, active, intelligent, extroverted, sociable, and friendly. The life span is of 12-16 years."
    },
    {
      name: " Alaskan Malamute",
      poster:
        "https://dogtime.com/assets/uploads/gallery/alaskan-malamute-dogs-and-puppies/alaskan-malamute-dogs-puppies-8.jpg",
      rating: 17.5,
      summary:
        "It got originated from the United States Alaska. It is a large breed of domestic dog. Its haul is very freight because of this strength and endurance. The weight of the male is 55 kg, and the female is 38 kg. The height of the female is 61cm and male 70cm. Its coat is thicker and double coat with plush undercoat. It is generally seen in grey, sable, black, or red and white. The size of a litter is 4-10 puppies. The life span of this breed dog is up to 16 years."
    },
    {
      name: "American Eskimo Dog",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mIyxDEZ5K1gxvydcKz778HckDPuHhCjTRg&usqp=CAU",
      summary:
        "This dog got originated from Germany. It is a breed of comparison dog and family member of Spitz. It is a toy size dog type. Its height is 23-30 cm, and the mass of the dog is 2.7-4.5kg. It is reserved, alert, intelligent, protective, and friendly. The life span of this dog is 13-15 years.",
      rating: 17
    },
    {
      name: "Affenpinscher",
      rating: 16.5,
      summary:
        "This type of breed of the dog got originated from Germany. Its nicknames are affen, monkey dog, and affie. This Dog belongs to the 17th century. Smaller in size of about 12-13 inches and comes in fawn, grey, red, and also in black and tan color. It was created to remove rodents from stables, granaries, and kitchens. And It is playful, fun-loving, stubborn, curious, and active. Its height is about 23-30 cm. The life span is of 12-14 years.",
      poster:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Borismindre.jpg/170px-Borismindre.jpg"
    },
    {
      name: "Siberian",
      poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portrait-of-siberian-cat-sitting-outdoors-royalty-free-image-559162229-1553192176.jpg?crop=0.815xw:1.00xh;0,0&resize=980:*",
      rating: 19,
      summary:
        "Siberians are very playful, they don't require much care, they're good with kids and other pets, affectionate, and love the outdoors, They're very healthy too. While there aren't many cons, know that you should invest in a heavy duty vacuum, because they often shed their long, fluffy hair."
    },
    {
      name: "Ragdoll",
      poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ragdoll-cat-with-intense-blue-eyes-royalty-free-image-107791319-1553192229.jpg?crop=0.432xw:0.974xh;0.446xw,0.00512xh&resize=980:*",
      rating: 18,
      summary:
        "There's so much more than meets the eye with Ragdoll cats. Hodgson says they're cuddly and playful, and kids just love them. Not to mention, they're also quiet and docile, so you can rest easy all day long. And while their eyes make them so unique, they also can inhibit them from seeing well, and some have partial blindness."
    },
    {
      name: "American Bobtail",
      poster:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/american-bobtail-cat-royalty-free-image-808975462-1553192401.jpg?crop=0.447xw:1.00xh;0.175xw,0&resize=980:*",
      rating: 17,
      summary:
        "If you're looking for a cat that acts like a dog, consider bringing home an American bobtail. They love to play games and are very adaptable and loving, says Hodgson. Take note that they're prone to hip dysplasia and some are born without tails (known as rumpies). Hodgson adds that unfortunately, rumpies cannot breed because of health problems associated with a shortened spine."
    }
  ];
  
  // const poster="https://easyscienceforkids.com/wp-content/uploads/2019/07/Shih-Tzu-17-4-1-758x635.jpg";
  // const name="Shih Tzu";
  // const rating=20;
  // const summary="It got originated in china. Other names are Chinese Lion Dog and Chrysanthemum Dog. They are litter in size up to 1-8. Weight for both females and males varies from 8.8-16 lbs. Height is also the same for both ranges from 7.9-11 inches. It is available in some colors like brindle red, gold, etc. These are playful, outgoing, loyal, and gentle. The life span of Shi is 10-16 years."
  
  
  

  const[animalList,setAnimalList]=useState(INITIAL_ANIMAL_LIST)
  const[name,setName]=useState('')
  const[poster,setPoster]=useState('')
  const[rating,setRating]=useState('')
  const[summary,setSummary]=useState('')
  const history=useHistory();
  return (
    <div >
      {/* <ul>
        <li>
<Link to="/pets">Pets</Link>
        </li>
      
      <li>
      <li >
        <Link to="/adopt">Adopt A Pet</Link>
      </li>
      <li >
        <Link to="/give">Give Away</Link>
      </li>
<Link to="/">Home</Link>
      </li>
      
      </ul> */}
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>history.push('/')}>Home</Button>
          <Button color="inherit" onClick={()=>history.push('/pets')}>Pets</Button>
          <Button color="inherit" onClick={()=>history.push('/adopt')}>Adopt A Pet</Button>
          <Button color="inherit" onClick={()=>history.push('/give')}>Give Away</Button>
         
        </Toolbar>
      </AppBar>

      <Switch>

      <Route exact path="/">
<Image/>
        </Route> 

        <Route path="/pets">
        <div className='add-animal-form'>
      {/* <input type="text" placeholder='Name' onChange={(event)=>setName(event.target.value)}/> */}
      <TextField onChange={(event)=>setName(event.target.value)}id="outlined-basic" label="Name" variant="outlined" />
       {/* <input type="text" placeholder='Image' onChange={(event)=>setPoster(event.target.value)}/> */}
       <TextField   onChange={(event)=>setPoster(event.target.value)}id="outlined-basic" label="Image" variant="outlined" />
        {/* <input type="text" placeholder='Rating' onChange={(event)=>setRating(event.target.value)}/> */}
       
        <TextField   onChange={(event)=>setRating(event.target.value)}id="outlined-basic" label="Rating" variant="outlined" />
         {/* <input type="text" placeholder='Summary' onChange={(event)=>setSummary(event.target.value)}/> */}
         <TextField   onChange={(event)=>setSummary(event.target.value)}id="outlined-basic" label="Summary" variant="outlined" />
         {/* <button onClick={()=>{
          const newanimal={
name:name,
poster:poster,
rating:rating,
summary:summary
          };
          setAnimalList([...animalList,newanimal]);
         }}>Add</button> */}
         <Button onClick={()=>{
          const newanimal={
name:name,
poster:poster,
rating:rating,
summary:summary
          };
          setAnimalList([...animalList,newanimal]);
         }} variant="contained">ADD</Button>
      </div>
      <div className="animalList">{animalList.map(({poster,name,rating,summary},index)=>
  <Animal key={index} poster={poster} name={name} rating={rating}  summary={summary}/>
)}</div>
</Route>



//        
        <Route path="/adopt">
        <Form/>
        </Route>
        <Route path="/give">
          <Form1/>
        </Route>
        <Route path="/animals">
<Redirect to="/pets"/>
        </Route>
       <Route path="**">
<Notfound/>
       </Route>
       
      </Switch>
      {/* <Image/> */}
     
      {/* <Form/> */}


    </div>
  );
}


function Animal({name,poster,rating,summary}){

const styles={
  // backgroundColor:"green",
  //Conditional Styling
  color:rating > 18?"#009432":"red",
};  
const[show,setShow]=useState(false)

const summarystyles={
  display:show ? "block":"none"
}
return(
  <Card className="animal-container">

<img src={poster}alt={name}className="animal-poster"/>
<CardContent>
<div className="animal-specs">
<h2 className="animal-name">{name}
<IconButton onClick={()=>setShow(!show)} color="primary" aria-label="add to shopping cart">
  {show ?<ExpandLessIcon />: <ExpandMoreIcon/>}
</IconButton>
</h2>

<h2 style={styles}className="animal-rating">⋆⋆⋆⋆☆ {rating}</h2>
</div>

{/* <IconButton onClick={()=>setShow(!show)} color="primary" aria-label="add to shopping cart">
  {show ?<ExpandLessIcon />: <ExpandMoreIcon/>}
</IconButton> */}
{/* <button onClick={()=>setShow(!show)}>Toggle</button> */}
{show ?<p style={summarystyles} className="animal-summary">{summary}</p>: ""}
</CardContent>
<CardActions>
<Counter/>
</CardActions>
{/* <Counter/> */}
  </Card>
  )
}


function Notfound(){
  return(
    <div>
      <h1 className='not-found'>404 NOT FOUND</h1>
      <img width="100%"src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="Not-Found"/>
    </div>
  )
}

function Form(){

  const styles={
    padding:"20px",
    marginLeft:"10px",
    textAlign:"center"
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit =()=>{
localStorage.setItem("name",name)
localStorage.setItem("email",email)
localStorage.setItem("number",number)
}

    
  return(
  
    <div className='card-form'> Adopt A Pet:

 <div className='form' >Age: <select style={styles} label="Age">

<option value="a">16</option>
<option value="b">12</option>
<option value="c">13</option>
<option value="d">4</option>
<option value="e">15</option>
<option value="f">14</option>
<option value="g">10</option>
<option value="h">3</option>
<option value="y">7</option>
</select>

Breed: <select style={styles} label="breed">

  <option value="i">Shih Tzu</option>
  <option value="j">Pug Dog</option>
  <option value="k">Pomeranian</option>
  <option value="l">Alaskan Malamute</option>
  <option value="m">American Eskimo</option>
  <option value="n">Affenpinscher</option>
  <option value="o">Siberian</option>
  <option value="p">Ragdoll</option>
  <option value="q">American Bobtail</option>
</select>
</div>
      
      <div className='detail'>Please Fill in your details: 

        <input type='text' placeholder='Name' value={name}  onChange={(e) => setName(e.target.value)}/>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type='number' placeholder='Phone-Number' value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>Request For Adoption</button>
      </div>
    </div>
    
   
  )
  
}


function Form1(){

  const styles={
    padding:"20px",
    marginLeft:"10px",
    textAlign:"center"
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit =()=>{
localStorage.setItem("name",name)
localStorage.setItem("email",email)
localStorage.setItem("number",number)
}

    
  return(
  
    <div className='card-form'> Give Away:
<h2>What pet do you want to give away?</h2>
 <div className='form' >Pet Type: <select style={styles} label="Age">

<option value="ab">Dog</option>
<option value="bc">Cat</option>

</select>

Breed: <select style={styles} label="breed">

  <option value="i">Shih Tzu</option>
  <option value="j">Pug Dog</option>
  <option value="k">Pomeranian</option>
  <option value="l">Alaskan Malamute</option>
  <option value="m">American Eskimo</option>
  <option value="n">Affenpinscher</option>
  <option value="o">Siberian</option>
  <option value="p">Ragdoll</option>
  <option value="q">American Bobtail</option>
</select>
</div>
      
      <div className='detail'>Please Fill in your details: 

        <input type='text' placeholder='Name' value={name}  onChange={(e) => setName(e.target.value)}/>
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type='number' placeholder='Phone-Number' value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>Request For Give Away</button>
      </div>
    </div>
    
   
  )
  
}

export default App;
