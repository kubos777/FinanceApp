import { Routes } from '@angular/router';

import { EstadisticaComponent } from '../finanzas/estadistica/estadistica.component';
import { FinanzasComponent } from '../finanzas/finanzas.component';
import { DetalleComponent } from '../finanzas/detalle/detalle.component';



export const dashboardRoutes: Routes = [
	{ path: '', component: EstadisticaComponent},
	{ path: 'finanzas', component: FinanzasComponent },
	{ path: 'detalle', component: DetalleComponent },
]