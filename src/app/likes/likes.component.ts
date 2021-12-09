import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-likes',
    templateUrl: './likes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./likes.component.scss']
})
export class LikesComponent {
}