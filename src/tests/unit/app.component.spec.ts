import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../app/app.component';
import { async } from '@angular/core/testing';

describe('component: AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ], // declare the test component
        })
        .compileComponents();  // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    });

    it('should display Hello World message', () => {
        const debugEl = fixture.debugElement;
        const h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('Hello World!');
    });
});