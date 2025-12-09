document.addEventListener('DOMContentLoaded', function() {

    // aqui guardo toda la info para las graficas (2024 y 2025)
    const allData = {
        
        // nuevos usuarios por mes
        users: {
            "2025 (Proyección)": { 
                netflix: [2.5, 2.8, 3.0, 2.2, 2.5, 3.1, 3.5, 3.8, 4.0, 4.2, 4.5, 5.0], 
                prime: [1.0, 1.2, 1.1, 1.5, 1.4, 1.6, 2.0, 2.1, 1.8, 2.2, 2.5, 3.0], 
                disney: [1.2, 1.5, 1.8, 1.0, 1.2, 1.5, 1.8, 2.0, 2.2, 2.5, 3.0, 3.5], 
                hbo: [0.8, 0.9, 1.0, 1.2, 1.5, 1.8, 2.0, 2.2, 2.5, 2.8, 3.0, 3.2] 
            },
            "2024 (Real)": { 
                netflix: [9.3, 8.5, 7.0, 6.0, 5.5, 4.0, 3.5, 4.5, 5.1, 6.0, 7.5, 8.0], 
                prime: [1.5, 1.8, 2.0, 1.2, 1.5, 1.0, 1.8, 2.0, 2.2, 2.5, 3.0, 3.2], 
                disney: [-1.3, -0.5, 0.5, 1.0, 2.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5], 
                hbo: [0.5, 0.8, 1.0, 2.0, 3.5, 4.0, 5.0, 6.0, 7.2, 6.5, 5.0, 4.0] 
            }
        },
        
        // total acumulado de usuarios
        total: {
            "2025 (Proyección)": { 
                netflix: [285, 288, 291, 293, 296, 299, 303, 306, 310, 315, 320, 325], 
                prime: [212, 213, 215, 216, 218, 220, 222, 224, 226, 228, 230, 233], 
                disney: [160, 162, 164, 165, 167, 169, 171, 173, 175, 178, 181, 185], 
                hbo: [112, 113, 115, 117, 119, 121, 123, 126, 128, 131, 134, 138] 
            },
            "2024 (Real)": { 
                netflix: [260, 269, 272, 275, 277, 278, 280, 281, 282, 285, 288, 290], 
                prime: [200, 202, 203, 204, 205, 206, 207, 208, 210, 211, 212, 213], 
                disney: [150, 149, 153, 154, 155, 156, 157, 158, 159, 160, 162, 165], 
                hbo: [97, 98, 99, 100, 103, 105, 107, 109, 110, 112, 113, 115] 
            }
        },

        // horas vistas
        hours: {
            "2025 (Proyección)": { 
                netflix: [16500, 16700, 16900, 17000, 17200, 17500, 18000, 18200, 18500, 18800, 19000, 19500], 
                prime: [5200, 5300, 5400, 5500, 5600, 5700, 5800, 5900, 6000, 6100, 6200, 6400], 
                disney: [4800, 4900, 5000, 5100, 5200, 5300, 5500, 5600, 5800, 6000, 6200, 6500], 
                hbo: [3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4400] 
            },
            "2024 (Real)": { 
                netflix: [15000, 15200, 15500, 15300, 15600, 15800, 16000, 16100, 16200, 16400, 16600, 17000], 
                prime: [4500, 4600, 4700, 4800, 4900, 5000, 5100, 5200, 5100, 5300, 5400, 5500], 
                disney: [4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000, 5200], 
                hbo: [2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600] 
            }
        },

        // dinero generado
        revenue: {
            "2025 (Proyección)": { 
                netflix: [10.5, 10.7, 10.9, 11.2, 11.5, 11.8, 12.0, 12.3, 12.6, 12.9, 13.2, 13.5], 
                prime: [4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1], 
                disney: [2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0], 
                hbo: [2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9] 
            },
            "2024 (Real)": { 
                netflix: [9.37, 9.45, 9.56, 9.60, 9.70, 9.80, 9.82, 9.90, 10.0, 10.1, 10.2, 10.3], 
                prime: [3.5, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4.0, 4.1, 4.2], 
                disney: [2.4, 2.5, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3.0, 3.1], 
                hbo: [2.3, 2.4, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 3.0] 
            }
        }
    };

    // funcion para armar las graficas y no repetir codigo
    function createChart(canvasId, dataKey, selectorId) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        
        // funcioncita para hacer los colores con degradado
        const createGradient = (r, g, b) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.5)`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            return gradient;
        };

        // colores definidos para cada empresa
        const gradientRed = createGradient(239, 68, 68); // netflix
        const gradientBlue = createGradient(59, 130, 246); // prime
        const gradientGreen = createGradient(34, 197, 94); // disney
        const gradientPurple = createGradient(168, 85, 247); // hbo

        // configuracion principal del chart
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [
                    { label: 'Netflix', data: allData[dataKey]["2024 (Real)"].netflix, borderColor: '#ef4444', backgroundColor: gradientRed, tension: 0.4, borderWidth: 3, fill: true },
                    { label: 'Prime Video', data: allData[dataKey]["2024 (Real)"].prime, borderColor: '#3b82f6', backgroundColor: gradientBlue, tension: 0.4, borderWidth: 3, fill: true },
                    { label: 'Disney+', data: allData[dataKey]["2024 (Real)"].disney, borderColor: '#22c55e', backgroundColor: gradientGreen, tension: 0.4, borderWidth: 3, fill: true },
                    { label: 'Max (HBO)', data: allData[dataKey]["2024 (Real)"].hbo, borderColor: '#a855f7', backgroundColor: gradientPurple, tension: 0.4, borderWidth: 3, fill: true }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#cbd5e1', font: { size: 13 } }, position: 'top', align: 'end' } },
                scales: {
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
                    x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
            }
        });

        // logica para cuando cambian el año en el select
        const selector = document.querySelector(selectorId);
        if (selector) {
            selector.addEventListener('change', function() {
                
                // checar si eligieron 2025 o 2024
                const selectedYear = this.value.includes("2025") ? "2025 (Proyección)" : "2024 (Real)";
                
                // actualizar los datos de las lineas
                chart.data.datasets[0].data = allData[dataKey][selectedYear].netflix;
                chart.data.datasets[1].data = allData[dataKey][selectedYear].prime;
                chart.data.datasets[2].data = allData[dataKey][selectedYear].disney;
                chart.data.datasets[3].data = allData[dataKey][selectedYear].hbo;
                
                // refrescar la grafica
                chart.update();
            });
        }
    }

    // arrancar todas las graficas de una vez
    createChart('usersChart', 'users', '.select-auto');
    createChart('totalUsersChart', 'total', '#totalUsersSelector');
    createChart('viewHoursChart', 'hours', '#viewHoursSelector');
    createChart('annualRevenueChart', 'revenue', '#yearRevenueSelector');

});