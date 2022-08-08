import { Component, Input, OnInit } from '@angular/core';
import { userType } from 'src/app/pages/user/user';
import { NpsService } from 'src/app/services/nps/nps.service';

@Component({
  selector: 'nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.css']
})
export class NpsComponent implements OnInit {
  @Input()
  user?: userType
  userScore?: number
  scores: any = [
    'detractor','detractor','detractor','detractor','detractor','detractor',
    'neutral','neutral',
    'promoter', 'promoter'
  ]

  @Input()
  productId: {id: string} = {id: ''}
  @Input()
  user_token: any
  

  constructor(
      private npsService: NpsService
    ) { }

  ngOnInit(): void {
    if (this.user_token) {
      this.getScore()
    }
  }

  newScore() {

  }

  getScore() {
      this.npsService.getScore(this.productId.id, this.user_token).subscribe(
        (resp: any) => {
          this.userScore = resp?.score
        }
      )
  }
}
