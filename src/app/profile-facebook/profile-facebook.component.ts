import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-facebook',
  templateUrl: './profile-facebook.component.html',
  styleUrls: ['./profile-facebook.component.scss']
})
export class ProfileFacebookComponent {
  activeSpanIndex: number = -1;
  menuItems: string[] = [
    'โพสต์', 'เกี่ยวกับ', 'เพื่อน', 'รูปภาพ', 'วิดิโอ', 'กีฬา', 'เพิ่มเติม'
  ];
  visibleMenuItems: string[] = [];
  commentControl = new FormControl();
  displayedComment: string = '';
  divHeightRem: number = 17.8;

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  
  ngOnInit() {
    this.calculateVisibleMenuItems();
  }
  onResize() {
    this.calculateVisibleMenuItems();
  }
  displayComment() {
      this.displayedComment = this.commentControl.value;
      this.commentControl.reset();
      this.divHeightRem = 24;
  }
  
  calculateVisibleMenuItems(): void {
    const screenWidth = window.innerWidth;
    const menuItemWidth = 200;
    const maxVisibleItems = Math.floor(screenWidth / menuItemWidth);
    this.visibleMenuItems = this.menuItems.slice(-maxVisibleItems);
    // this.visibleMenuItems = this.menuItems.slice(0, maxVisibleItems);
  }
  
  active(index: number): void {
    this.activeSpanIndex = index;
  }
}
