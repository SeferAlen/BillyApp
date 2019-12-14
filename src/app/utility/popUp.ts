import Swal from 'sweetalert2';

export class popUp {

    static createFailed(title: string, message: string): any {

        Swal.fire({title: title,
                   text: message,
                   icon: 'warning',
                   allowOutsideClick: false});
    }
}
