// ฟังก์ชันสำหรับอัปเดตข้อมูล (จำลอง)
function updateData() {
    // ดึงข้อมูลจากฐานข้อมูลหรือ API ของคุณ
    const vacantRooms = ...; // จำนวนห้องว่าง
    const occupiedRooms = ...; // จำนวนห้องมีผู้เช่า
    const totalRevenue = ...; // รายได้รวม
    const paymentData = ...; // ข้อมูลการชำระเงิน

    // อัปเดตข้อมูลบนหน้าจอ
    document.getElementById('vacant-rooms').textContent = vacantRooms;
    document.getElementById('occupied-rooms').textContent = occupiedRooms;
    document.getElementById('total-revenue').textContent = totalRevenue;

    // อัปเดตตารางสถานะการชำระเงิน
    const tableBody = document.getElementById('payment-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // ล้างข้อมูลเดิม

    for (const payment of paymentData) {
        const row = tableBody.insertRow();
        const roomCell = row.insertCell();
        const nameCell = row.insertCell();
        const statusCell = row.insertCell();

        roomCell.textContent = payment.room;
        nameCell.textContent = payment.name;
        statusCell.textContent = payment.status;
    }
}

// เรียกใช้ฟังก์ชันอัปเดตข้อมูลเป็นระยะ (เช่น ทุก 5 วินาที)
setInterval(updateData, 5000);