import { Component, OnInit } from '@angular/core';  
  
interface AziAltData {  
  azi: number;  
  alt: number;  
}  
  
@Component({  
  selector: 'app-azi-alt',  
  standalone: true,  
  templateUrl: './azi-alt.component.html',  
  styleUrls: ['./azi-alt.component.scss']  
})  
export class AziAltComponent implements OnInit {  
  azi: number | null = null;  
  alt: number | null = null;  
  content: AziAltData | null = null;  
  
  ngOnInit() {  
    this.getAziAlt();  
  }  
  
  getAziAlt() {  
    fetch('http://localhost:3000/proxy')  
      .then(response => response.json())  
      .then((data: AziAltData) => {  
        console.log("Fetched data:", data);  
        this.azi = data.azi;  
        this.alt = data.alt;  
        this.content = data;  
      })  
      .catch(error => console.error('Error fetching content:', error));  
  }  
}  
