import { trigger, transition, style, animate } from '@angular/animations';

export let slide = trigger('slide',[
        transition(':enter',[
            style({transform:'translateX(-10px'}),
            animate('500ms' )
        ]),
        transition(':leave', [
            animate('500ms 0.5s ease-in' , style({transform:'translateX(-100%'}))
        ])
    ]);

    export let fade = trigger('fade', [
        transition('void => *', [
          style({ backgroundColor: 'blue' , opacity: 0 }),
          animate(2000)
        ])
      ]);