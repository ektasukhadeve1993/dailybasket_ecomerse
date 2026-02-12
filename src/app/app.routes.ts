import { Routes } from '@angular/router';

/* ================= PUBLIC ================= */
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { HomeComponent } from './pages/public/home/home.component';
import { ProductsComponent } from './pages/public/products/products.component';
import { AboutComponent } from './pages/public/about/about.component';
import { ContactComponent } from './pages/public/contact/contact.component';

 /* ================= AUTH ================= */
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

/* ================= CUSTOMER ================= */
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { CustomerCartComponent } from './pages/customer/customer-cart/customer-cart.component';
import { CustomerCheckoutComponent } from './pages/customer/customer-checkout/customer-checkout.component';
import { CustomerOrdersComponent } from './pages/customer/customer-orders/customer-orders.component';
import { CustomerProfileComponent } from './pages/customer/customer-profile/customer-profile.component';

/* ================= ADMIN ================= */
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminVendorsComponent } from './pages/admin/admin-vendors/admin-vendors.component';
import { AdminCategoriesComponent } from './pages/admin/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './pages/admin/admin-orders/admin-orders.component';
import { AdminReportsComponent } from './pages/admin/admin-reports/admin-reports.component';

/* ================= SELLER ================= */
import { SellerLayoutComponent } from './layouts/seller-layout/seller-layout.component';
import { SellerDashboardComponent } from './pages/seller/seller-dashboard/seller-dashboard.component';
import { SellerProductsComponent } from './pages/seller/seller-products/seller-products.component';
import { SellerInventoryComponent } from './pages/seller/seller-inventory/seller-inventory.component';
import { SellerOrdersComponent } from './pages/seller/seller-orders/seller-orders.component';
import { SellerEarningsComponent } from './pages/seller/seller-earnings/seller-earnings.component';

  /* ================= DELIVERY ================= */
import { DeliveryLayoutComponent } from './layouts/delivery-layout/delivery-layout.component';
import { DeliveryDashboardComponent } from './pages/delivery/delivery-dashboard/delivery-dashboard.component';
import { DeliveryAssignedOrdersComponent } from './pages/delivery/delivery-assigned-orders/delivery-assigned-orders.component';
import { DeliveryCompletedOrdersComponent } from './pages/delivery/delivery-completed-orders/delivery-completed-orders.component';

/* ================= STAFF ================= */
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';
import { StaffDashboardComponent } from './pages/staff/staff-dashboard/staff-dashboard.component';
import { StaffInventoryComponent } from './pages/staff/staff-inventory/staff-inventory.component';
import { StaffSupportComponent } from './pages/staff/staff-support/staff-support.component';
import { StaffReportsComponent } from './pages/staff/staff-reports/staff-reports.component';
import { StoreComponent } from './pages/public/store/store.component';
import { BrandsComponent } from './pages/public/brands/brands.component';


export const routes: Routes = [
    /* ================= PUBLIC ================= */
     {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'store', component: StoreComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'brand', component: BrandsComponent },
    ]
  },
   /* ================= AUTH ================= */
  {
    path :'auth',
    children : [  
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent },
    ]
  },

  /* ================= CUSTOMER ================= */
  {
    path: 'customer',
    component: CustomerLayoutComponent,
   
    children: [
      { path: 'dashboard', component: CustomerDashboardComponent },
      { path: 'cart', component: CustomerCartComponent },
      { path: 'checkout', component: CustomerCheckoutComponent },
      { path: 'orders', component: CustomerOrdersComponent },
      { path: 'profile', component: CustomerProfileComponent }
    ]
  },

  /* ================= ADMIN ================= */
  {
    path: 'admin',
    component: AdminLayoutComponent,
   
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'vendors', component: AdminVendorsComponent },
      { path: 'categories', component: AdminCategoriesComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'orders', component: AdminOrdersComponent },
      { path: 'reports', component: AdminReportsComponent }
    ]
  },

  /* ================= SELLER ================= */
  {
    path: 'seller',
    component: SellerLayoutComponent,
    
    children: [
      { path: 'dashboard', component: SellerDashboardComponent },
      { path: 'products', component: SellerProductsComponent },
      { path: 'inventory', component: SellerInventoryComponent },
      { path: 'orders', component: SellerOrdersComponent },
      { path: 'earnings', component: SellerEarningsComponent }
    ]
  },

  /* ================= DELIVERY ================= */
  {
    path: 'delivery',
    component: DeliveryLayoutComponent,
    
    children: [
      { path: 'dashboard', component: DeliveryDashboardComponent },
      { path: 'assigned-orders', component: DeliveryAssignedOrdersComponent },
      { path: 'completed-orders', component: DeliveryCompletedOrdersComponent }
    ]
  },

  /* ================= STAFF ================= */
  {
    path: 'staff',
    component: StaffLayoutComponent,
    
    children: [
      { path: 'dashboard', component: StaffDashboardComponent },
      { path: 'inventory', component: StaffInventoryComponent },
      { path: 'support', component: StaffSupportComponent },
      { path: 'reports', component: StaffReportsComponent }
    ]
  },

  /* ================= FALLBACK ================= */
  { path: '**', redirectTo: '' }
];
