import data from '../../data/data.json'
import img from '../../data/img.json'

const Admin = () => {

    
    data.map(item => {
        item.image=[];
        for (let i = 0; i < 2; i++) {
            item.image.push(img[Math.floor(Math.random() * 13)])
        }
    })
    console.log(data);


    return (
        <>
            <h2>Administracion</h2>
        </>
    );
}

export default Admin;
