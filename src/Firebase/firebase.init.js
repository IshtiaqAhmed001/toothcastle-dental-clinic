import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.firebase";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;







const fakeData = [
    { id: 1, name: "Root Canal", description: 'RCT cleans and disinfects the canal of the tooth from the inside. The canals are then filled to prevent the infection from recurring. An alternative to RCT is extraction.', img: 'https://i.ibb.co/ByrRBpm/1.jpg', price: '100$' },
    { id: 2, name: "Teeth Cleaning", description: 'Teeth cleaning is performed by a special dentist to remove the plaque, tartar or any other stains on your teeth. A proper physical exam determines how much teeth cleaning is required and which tools or cleaning treatment should be preferred for any specific case.', img: 'https://i.ibb.co/LRkd9FN/2.jpg', price: ' $' },
    { id: 3, name: "Tooth Extractions", description: 'Tooth extraction means pulling out a specific tooth. There are a number of reasons for tooth extractions. Some major reasons for the tooth extractions are tooth decay, tooth damage or some tooth alignment purposes.', img: 'https://i.ibb.co/2cytdsk/3.jpg', price: '50$' },
    { id: 4, name: "Wisdom Tooth Removal", description: 'Wisdom tooth is the last tooth in your jaw. It normally erupts at teenage when people should be matured. That’s why it is called wisdom tooth. Some people may face severe pain while wisdom tooth eruption, because there is not enough space for any further tooth and the wisdom tooth tries to erupt. This causes some disturbance in the shape and angle of the wisdom tooth. If it causes severe pain, your dentist may suggest you to make it remove immediately. Another reason of wisdom tooth removal may be the cavities or gum disease around the wisdom tooth. It can’t be treated well, nor it can be flossed or brushed properly due to lesser space.The wisdom tooth removal process is the same as any other dental surgery. The dentist gives you anesthesia and cuts your gum tissues to drag the wisdom tooth. After the surgery, the wounds are stitched and a gauze pad is placed in your mouth to stop bleeding.', img: 'https://i.ibb.co/RQqhj7J/4.jpg', price: '90$' },
    { id: 5, name: "Children Dentistry", description: 'Children dentistry is a special one among all types of dental services which only deals with the children. It is also called the pediatric dentistry.The major issues related to children’s dentistry are infant oral health examination, urgent dental care, special advisory management regarding teething (tooth eruption & tooth loss and relaxing medication under teething pain Etc.)', img: 'https://i.ibb.co/n6MHhqD/5.jpg', price: '200$' },
    { id: 6, name: "Braces (Orthodontics)", description: 'Braces are dental tools that help correct problems with your teeth, like crowding, crooked teeth, or teeth that are out of alignment. Many people get braces when they’re teenagers, but adults get them too. As you wear them, braces slowly straighten and align your teeth so you have a normal bite. Some people get braces to adjust their smile', img: 'https://i.ibb.co/Hn6gZ4Y/6.jpg', price: '1000$' },
    { id: 7, name: "Dental Implants", description: 'A dental implant is an artificial dental root which provides an anchor point for the artificial tooth or crown. It is usually done to treat the tooth decay or tooth erosion. It is a costly procedure, but It provides a firm base of the tooth. Dental implants are also inserted on the side edges to provide anchor points to the dental bridge.', img: 'https://i.ibb.co/QN8rsy7/7.jpg', price: '20000$' },
    { id: 8, name: "Smile Makeover", description: 'Smile makeover is the process of achieving a best possible smile for a person. First of all, missing or cracked teeth are recovered via dental implants and crowns and bridges services. Then the shape of the teeth and the teeth alignment are set via Invisalign or braces. Then the teeth whitening is done to achieve the best possible smile.', img: 'https://i.ibb.co/nDpFcBf/8.jpg', price: '1500$' },
    { id: 9, name: "Gingival Sculpting(Gum Sculpting)", description: 'Gingival sculpting is also called the gum sculpting because it is related to the gum problems. The Gingival sculpting process involves the reshaping the uneven gums with invasive lasers. If there is excessive gum tissue, it is removed to balance the gum line. The laser is involved in the process so it never grows again.', img: 'https://i.ibb.co/s9Ckv5K/9.jpg', price: '300$' }
]



