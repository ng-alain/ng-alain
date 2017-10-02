import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
    selector: 'app-sweetalert',
    templateUrl: './sweetalert.component.html'
})
export class SweetAlertComponent {
    alert1() {
        swal(`Hello world!`);
    }
    alert2() {
        swal(`Here's the title!`, `...and here's the text!`);
    }
    alert3() {
        swal(`Good job!`, `You clicked the button!`, `success`);
    }
    alert31() {
        swal(`Oops`, `Something went wrong!`, `error`);
    }
    alert4() {
        swal({
            title: `Good job!`,
            text: `You clicked the button!`,
            icon: `success`,
            button: `Aww yiss!`,
        });
    }
    alert41() {
        swal(`This modal will disappear soon!`, {
            buttons: false,
            timer: 3000,
        });
    }
    alert5() {
        swal(`Click on either the button or outside the modal.`)
            .then((value) => {
                swal(`The returned value is: ${value}`);
            });
    }

    alert6() {
        swal({
            title: `Are you sure?`,
            text: `Once deleted, you will not be able to recover this imaginary file!`,
            icon: `warning`,
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal(`Poof! Your imaginary file has been deleted!`, {
                        icon: `success`,
                    });
                } else {
                    swal(`Your imaginary file is safe!`);
                }
            });
    }

    alert7() {
        swal(`Are you sure you want to do this?`, {
            buttons: ['Oh noez!', 'Aww yiss!'],
        });
    }

    alert8() {
        swal('A wild Pikachu appeared! What do you want to do?', {
            buttons: {
                cancel: 'Run away!',
                catch: {
                    text: 'Throw Pokéball!',
                    value: 'catch',
                },
                defeat: true,
            },
        })
            .then((value) => {
                switch (value) {

                    case 'defeat':
                        swal('Pikachu fainted! You gained 500 XP!');
                        break;

                    case 'catch':
                        swal('Gotcha!', 'Pikachu was caught!', 'success');
                        break;

                    default:
                        swal('Got away safely!');
                }
            });
    }

    alert9() {
        swal({
            text: 'Search for a movie. e.g. "La La Land".',
            content: 'input',
            button: {
                text: 'Search!',
                closeModal: false,
            },
        })
            .then(name => {
                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
            })
            .then(results => {
                return results.json();
            })
            .then(json => {
                const movie = json.results[0];

                if (!movie) {
                    return swal('No movie was found!');
                }

                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;

                swal({
                    title: 'Top result:',
                    text: name,
                    icon: imageURL,
                });
            })
            .catch(err => {
                if (err) {
                    swal('Oh noes!', 'The AJAX request failed!', 'error');
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
    }

    alert10() {
        swal('Write something here:', {
            content: 'input',
        })
            .then((value) => {
                swal(`You typed: ${value}`);
            });
    }
}
