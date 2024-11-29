import { Component } from '@angular/core';
import { LikesComponent } from './likes/likes.component';

@Component({
    imports: [LikesComponent],
    selector: 'app-root',
    template: `
    <h1>Blog post</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper tincidunt semper. Pellentesque condimentum, ligula non rutrum malesuada, nulla lacus rhoncus nisi, nec fringilla massa urna quis eros. Integer faucibus placerat dui sit amet volutpat. Curabitur suscipit rhoncus lectus, sit amet fermentum lacus interdum sed. Morbi sem dolor, dignissim ut luctus in, tempor id nisi. Phasellus lorem dui, viverra eleifend imperdiet vel, fringilla ac odio. Suspendisse vel elit risus. Nunc nec semper justo, ac scelerisque felis. Vivamus vestibulum ante sed nulla sodales, nec pretium tortor placerat. Phasellus tincidunt suscipit leo, a tristique quam lobortis at. Maecenas at lorem magna. Integer faucibus molestie lectus, ac aliquam neque. Integer quis euismod quam, id sodales nunc.
    </p>
    
    <app-likes></app-likes>
  `,
    styles: [],
})
export class AppComponent {
  title = 'tests-likes-angular';
}
