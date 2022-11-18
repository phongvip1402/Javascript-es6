import React, { useEffect, useState } from 'react'




// Viết chương trình cho phép người dùng chọn một chiếc xe và màu sắc tương ứng.
// Khi khởi chạy, chương trình mặc định chọn xe và màu theo phần tử đầu tiên trong danh sách.
// Người dùng ấn combobox car để chọn xe mong muốn
// Người dùng ấn combobox color để chọn màu mong muốn
// Kết quả sẽ hiển thị ở bên dưới với nội dung You selected a {color} – {car}
export default function SelectCar() {
    const [car, setCar] = useState();
    const [color, setColor] = useState();

    const handleCar = e => {
        setCar(e.target.value)
        console.log(car);
    }
  
    return (
        <div>
            <select value={car} onChange={handleCar}>
                Select the car
                <option value='BMW'>BMW</option>
                <option value='Ford' >Ford</option>
                <option value='Porsche'>Porsche</option>
            </select>
            <select value={color} onChange={e => setColor(e.target.value)}>
                Select the color
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
            </select>
            <h1>You selected a {color} - {car}</h1>
        </div>
    )
}
