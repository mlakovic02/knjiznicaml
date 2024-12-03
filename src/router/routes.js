const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Početna stranica
      { path: 'popisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') }, // Popis svih knjiga
      { path: 'pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') }, // Pretraživanje
      { path: 'o_nama', component: () => import('pages/ONamaPage.vue') }, // O nama
      { path: 'lokacija', component: () => import('pages/LokacijaPage.vue') }, // Lokacija
      { path: 'login', component: () => import('pages/LoginPage.vue') }, // Login
      { path: 'registracija', component: () => import('pages/RegistracijaPage.vue') } // Registracija
    ]
  },
  {
    path: '/:catchAll(.)',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
