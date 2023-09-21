import Pic1 from './bon-vivant-qom5MPOER-I-unsplash.jpg';
import Pic2 from './farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg';
import Pic3 from './victoria-shes-UC0HZdUitWY-unsplash.jpg';

export default function designMenu(){
    const menudiv=document.createElement('div');
    menudiv.classList.add('menudiv');
    menudiv.classList.add('remove');
    const fooddiv1=document.createElement('div');
    fooddiv1.classList.add('fooddiv1');
    const food1=new Image();
    food1.src=Pic1;
    food1.classList.add('food1');
    fooddiv1.appendChild(food1);
    menudiv.appendChild(fooddiv1);
    const fooddiv2=document.createElement('div');
    fooddiv2.classList.add('fooddiv2');
    const food2=new Image();
    food2.src=Pic2;
    food2.classList.add('food2');
    fooddiv2.appendChild(food2);
    menudiv.appendChild(fooddiv2);
    const fooddiv3=document.createElement('div');
    fooddiv3.classList.add('fooddiv3');
    const food3=new Image();
    food3.src=Pic3;
    food3.classList.add('food3');
    fooddiv3.appendChild(food3);
    menudiv.appendChild(fooddiv3);
    return menudiv;
}