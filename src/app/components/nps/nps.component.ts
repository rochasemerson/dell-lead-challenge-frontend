import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userType } from 'src/app/pages/user/user';
import { NpsService } from 'src/app/services/nps/nps.service';
import { NpsType } from './npsType';

@Component({
  selector: 'nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.css']
})
export class NpsComponent implements OnInit {
  @Input()
  user?: userType
  userScore?: NpsType
  productScore!: number
  scores: any = [
    'detractor', 'detractor', 'detractor', 'detractor', 'detractor', 'detractor',
    'neutral', 'neutral',
    'promoter', 'promoter'
  ]
  @Input()
  productId!: { id: string }
  @Input()
  user_token: any
  mode = 'vote'
  @Output() scoreEvent = new EventEmitter<string>();



  constructor(
    private npsService: NpsService
  ) { }

  ngOnInit(): void {
    if (this.user_token) {
      this.getScore()
    }
  }

  newScore(value: number) {
    this.npsService.newScore(this.productId.id, value, this.user_token).subscribe(
      (resp: any) => {
        this.userScore = resp
        this.mode = 'edit'
      }
    )
    this.scoreEvent.emit('')
  }

  getScore() {
    this.npsService.getScore(this.productId.id, this.user_token).subscribe(
      (resp: any) => {
        if (!resp) return
        this.userScore = resp
        this.mode = 'edit'
      }
    )
  }

  editScore(newScore: number) {
    this.npsService.editScore(this.userScore!.id, newScore, this.user_token).subscribe(
      (resp: any) => {
        this.userScore = resp
      }
    )
    this.scoreEvent.emit('')
  }
}
