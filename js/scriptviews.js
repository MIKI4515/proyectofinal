document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 0. INICIALIZAR TOOLTIPS (BOOTSTRAP)
    // ==========================================
    // Esto hace que funcionen los mensajes flotantes en las tarjetas
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ==========================================
    // 1. CONFIGURACION COMUN (COLORES Y FUENTES)
    // ==========================================
    const textGray = '#cbd5e1';
    const gridColor = 'rgba(255, 255, 255, 0.1)';
    
    Chart.defaults.color = textGray;
    Chart.defaults.font.family = "'Inter', sans-serif";

    // ==========================================
    // 2. LOGICA ESPECIFICA DE DISNEY+
    // ==========================================
    const disneyUniqueChart = document.getElementById('franchiseChart');

    if (disneyUniqueChart) {
        const disneyBlue = '#113CCF'; 
        const disneyLightBlue = '#00d2ff';

        // grafico de suscriptores por region
        const regionCanvas = document.getElementById('regionChart');
        if (regionCanvas) {
            new Chart(regionCanvas.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Disney+ Core (Doméstico)', 'Disney+ Core (Internacional)', 'Disney+ Hotstar (India/SEA)'],
                    datasets: [{
                        data: [54.8, 63.5, 35.5], 
                        backgroundColor: [disneyBlue, '#ffffff', '#0a1e60'], 
                        borderWidth: 0,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { padding: 20 } },
                        tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + ctx.raw + ' M' } }
                    }
                }
            });
        }

        // grafico de franquicias
        new Chart(disneyUniqueChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Marvel', 'Star Wars', 'Disney Classics', 'Pixar', 'Nat Geo'],
                datasets: [{
                    label: 'Demanda',
                    data: [35, 28, 20, 12, 5],
                    backgroundColor: ['#ed1d24', '#ffe81f', disneyBlue, '#ffffff', '#ffcc00'],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { display: false, grid: { display: false } },
                    x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } }
                },
                plugins: { legend: { display: false } }
            }
        });

        // grafico de ingresos
        const revenueCanvas = document.getElementById('revenueChart');
        if (revenueCanvas) {
            const ctx = revenueCanvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(0, 210, 255, 0.5)');
            gradient.addColorStop(1, 'rgba(0, 210, 255, 0.0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24'],
                    datasets: [{
                        label: 'Ingresos DTC (Billones USD)',
                        data: [5.5, 5.8, 6.0, 6.1, 6.38],
                        borderColor: disneyLightBlue,
                        backgroundColor: gradient,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: disneyBlue,
                        pointRadius: 5,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { min: 4, grid: { color: gridColor }, ticks: { callback: (val) => '$' + val + 'B' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }

    // ==========================================
    // 3. LOGICA ESPECIFICA DE MAX (HBO)
    // ==========================================
    const maxUniqueChart = document.getElementById('contentChart');

    if (maxUniqueChart) {
        const maxBlue = '#002be7'; 
        const maxPurple = '#4c26c3';

        // distribucion de usuarios
        const regionCanvas = document.getElementById('regionChart');
        if (regionCanvas) {
            new Chart(regionCanvas.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Doméstico (USA/Canadá)', 'Internacional (Latam/Europa)'],
                    datasets: [{
                        data: [52.6, 57.9], 
                        backgroundColor: [maxBlue, '#9d4edd'], 
                        borderWidth: 0,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { padding: 20 } },
                        tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + ctx.raw + ' M' } }
                    }
                }
            });
        }

        // hubs de contenido
        new Chart(maxUniqueChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['HBO Original', 'DC Universe', 'Wizarding World', 'Discovery/TLC', 'Adult Swim'],
                datasets: [{
                    label: 'Demanda',
                    data: [35, 25, 15, 15, 10],
                    backgroundColor: ['#fff', '#0476F2', '#7400b8', '#ffba08', '#000000'],
                    borderColor: 'rgba(255,255,255,0.2)',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { display: false, grid: { display: false } },
                    x: { grid: { display: false }, ticks: { font: { size: 11 } } }
                },
                plugins: { legend: { display: false } }
            }
        });

        // ingresos trimestrales
        const revenueCanvas = document.getElementById('revenueChart');
        if (revenueCanvas) {
            const ctx = revenueCanvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(76, 38, 195, 0.6)'); 
            gradient.addColorStop(1, 'rgba(76, 38, 195, 0.0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24'],
                    datasets: [{
                        label: 'Ingresos DTC (Billones USD)',
                        data: [2.44, 2.53, 2.46, 2.57, 2.63],
                        borderColor: '#9d4edd',
                        backgroundColor: gradient,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: maxBlue,
                        pointRadius: 6,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { min: 2, grid: { color: gridColor }, ticks: { callback: (val) => '$' + val + 'B' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }

    // ==========================================
    // 4. LOGICA ESPECIFICA DE NETFLIX
    // ==========================================
    const netflixUniqueChart = document.getElementById('subsChart');

    if (netflixUniqueChart) {
        const netflixRed = '#E50914';
        const netflixDarkRed = '#B20710';

        // grafico circular de regiones
        const regionCanvas = document.getElementById('regionChart');
        if (regionCanvas) {
            new Chart(regionCanvas.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['EMEA (Europa/África)', 'UCAN (USA & Canadá)', 'LATAM', 'APAC'],
                    datasets: [{
                        data: [96.1, 84.8, 49.2, 52.6], 
                        backgroundColor: [netflixRed, '#ffffff', '#564d4d', netflixDarkRed],
                        borderColor: '#000000',
                        borderWidth: 2,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { padding: 20 } },
                        tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + ctx.raw + ' M' } }
                    }
                }
            });
        }

        // nuevos suscriptores por Q
        new Chart(netflixUniqueChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024'],
                datasets: [{
                    label: 'Nuevos Suscriptores (Millones)',
                    data: [13.1, 9.3, 8.0, 5.1],
                    backgroundColor: netflixRed,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, grid: { color: gridColor } },
                    x: { grid: { display: false } }
                },
                plugins: { legend: { display: false } }
            }
        });

        // evolucion de ingresos
        const revenueCanvas = document.getElementById('revenueChart');
        if (revenueCanvas) {
            new Chart(revenueCanvas.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24'],
                    datasets: [{
                        label: 'Ingresos (Billones USD)',
                        data: [8.54, 8.83, 9.37, 9.56, 9.82],
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(229, 9, 20, 0.1)',
                        tension: 0.3,
                        borderWidth: 3,
                        pointBackgroundColor: netflixRed,
                        pointBorderColor: '#fff',
                        pointRadius: 6,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { min: 8, grid: { color: gridColor }, ticks: { callback: (val) => '$' + val + 'B' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }

    // ==========================================
    // 5. LOGICA ESPECIFICA DE PRIME VIDEO
    // ==========================================
    const primeUniqueChart = document.getElementById('catalogChart');

    if (primeUniqueChart) {
        const primeBlue = '#00A8E1'; 
        
        // catalogo de contenido
        new Chart(primeUniqueChart.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Películas (Movies)', 'Series de TV', 'Documentales', 'Deportes en Vivo'],
                datasets: [{
                    data: [75, 15, 8, 2], 
                    backgroundColor: [primeBlue, '#ffffff', '#22384f', '#FF9900'], 
                    borderWidth: 0,
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { padding: 20 } },
                    tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + ctx.raw + '%' } }
                }
            }
        });

        // gasto en contenido
        const spendCanvas = document.getElementById('spendChart');
        if (spendCanvas) {
            new Chart(spendCanvas.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['2021', '2022', '2023', '2024 (Est)'],
                    datasets: [{
                        label: 'Inversión (Billones USD)',
                        data: [13.0, 16.6, 18.9, 19.5], 
                        backgroundColor: primeBlue,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: false, min: 10, grid: { color: gridColor }, ticks: { callback: (val) => '$' + val + 'B' } },
                        x: { grid: { display: false } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }

        // ingresos de suscripcion
        const revenueCanvas = document.getElementById('revenueChart');
        if (revenueCanvas) {
            const ctx = revenueCanvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(0, 168, 225, 0.5)'); 
            gradient.addColorStop(1, 'rgba(0, 168, 225, 0.0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24'],
                    datasets: [{
                        label: 'Ingresos Suscripción (Billones USD)',
                        data: [10.17, 10.49, 10.72, 10.87, 11.28],
                        borderColor: primeBlue,
                        backgroundColor: gradient,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: primeBlue,
                        pointRadius: 6,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { min: 9, grid: { color: gridColor }, ticks: { callback: (val) => '$' + val + 'B' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }

    // ==========================================
    // 6. LOGICA ESPECIFICA DE TWITCH
    // ==========================================
    const twitchUniqueChart = document.getElementById('categoryChart');

    if (twitchUniqueChart) {
        const twitchPurple = '#9146FF'; 

        // grafico de idiomas
        const langCanvas = document.getElementById('languageChart');
        if (langCanvas) {
            new Chart(langCanvas.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Inglés', 'Español', 'Portugués', 'Alemán', 'Otros'],
                    datasets: [{
                        data: [56, 18, 10, 7, 9], 
                        backgroundColor: [twitchPurple, '#ffffff', '#00e5ff', '#ff0055', '#333'],
                        borderWidth: 0,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { padding: 20 } },
                        tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + ctx.raw + '%' } }
                    }
                }
            });
        }

        // categorias mas vistas
        new Chart(twitchUniqueChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Just Chatting', 'League of Legends', 'GTA V', 'Valorant', 'CS:GO 2'],
                datasets: [{
                    label: 'Popularidad',
                    data: [100, 65, 55, 45, 30], 
                    backgroundColor: [
                        twitchPurple, 
                        'rgba(145, 70, 255, 0.8)',
                        'rgba(145, 70, 255, 0.6)',
                        'rgba(145, 70, 255, 0.4)',
                        'rgba(145, 70, 255, 0.2)'
                    ],
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { display: false, grid: { display: false } },
                    y: { grid: { display: false }, ticks: { font: { size: 12, weight: 'bold' } } }
                },
                plugins: { legend: { display: false } }
            }
        });

        // estimacion de ingresos
        const revenueCanvas = document.getElementById('revenueChart');
        if (revenueCanvas) {
            const ctx = revenueCanvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(145, 70, 255, 0.5)'); 
            gradient.addColorStop(1, 'rgba(145, 70, 255, 0.0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['2020', '2021', '2022', '2023', '2024 (Est)'],
                    datasets: [{
                        label: 'Ingresos Estimados (Billones USD)',
                        data: [2.1, 2.6, 2.8, 2.9, 3.1],
                        borderColor: twitchPurple,
                        backgroundColor: gradient,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: twitchPurple,
                        pointRadius: 6,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { min: 1, grid: { color: gridColor }, ticks: { callback: (val) => '$' + val + 'B' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }

    // ==========================================
    // 7. LOGICA ESPECIFICA DE YOUTUBE
    // ==========================================
    const youtubeUniqueChart = document.getElementById('shortsChart');

    if (youtubeUniqueChart) {
        const ytRed = '#FF0000'; 

        // consumo por dispositivo
        const deviceCanvas = document.getElementById('deviceChart');
        if (deviceCanvas) {
            new Chart(deviceCanvas.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Móvil / Tablet', 'Connected TV (CTV)', 'Desktop / Laptop', 'Consolas'],
                    datasets: [{
                        data: [60, 25, 12, 3], 
                        backgroundColor: [ytRed, '#ffffff', '#aa0000', '#555'],
                        borderWidth: 0,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { padding: 20 } },
                        tooltip: { callbacks: { label: (ctx) => ctx.label + ': ' + ctx.raw + '%' } }
                    }
                }
            });
        }

        // vistas de shorts
        new Chart(youtubeUniqueChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Vistas Diarias (Billones)',
                    data: [30, 50, 70, 75], 
                    backgroundColor: ytRed,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textGray } },
                    x: { grid: { display: false }, ticks: { color: textGray } }
                },
                plugins: { legend: { display: false } }
            }
        });

        // ingresos por publicidad
        const revenueCanvas = document.getElementById('revenueChart');
        if (revenueCanvas) {
            const ctx = revenueCanvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)'); 
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0.0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24'],
                    datasets: [{
                        label: 'Ingresos Ads (Billones USD)',
                        data: [7.95, 9.20, 8.09, 8.66, 8.92],
                        borderColor: ytRed,
                        backgroundColor: gradient,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: ytRed,
                        pointRadius: 6,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { min: 6, grid: { color: gridColor }, ticks: { callback: (val) => '$' + val + 'B' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }

});