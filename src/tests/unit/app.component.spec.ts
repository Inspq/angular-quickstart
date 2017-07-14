import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../app/app.component';

describe('component: AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ]
        });
    });

    it('should display Hello World message', () => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const debugEl = fixture.debugElement;
            const h1 = debugEl.nativeElement.querySelector('h1');
            expect(h1.textContent).toEqual('Hello World!');
        });
    });
});