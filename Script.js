function checkKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong'
        ];
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'kuntilanak',
                'macan putih',
                'raja gila',
                'penuh ambisi',
                'sumpit gacoan',
                'tuyul mulet',
                'rawa rontek',
                'raja gila',
                'kuda poni',
                'nene sihir',
                'iblis',
                'vampir',
                'pocong',
                'Naga'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu ${khodam[random]}`);
        } else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
        }
        $('#search').val('');
    }
}

$(document).ready(function() {
   $('#btn-search').on('click', checkKhodam);
});
